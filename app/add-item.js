Slim.tag('add-item', class extends Slim {

    get template() {
        return `
<div>
    <h2>Add new item</h2>
    <div>
        <input #inp_name type="text" placeholder="Name your hot item" />
        <input #inp_img type="text" placeholder="Image url"/> 
        <button click="onSubmit">Submit</button>
    </div>
</div>`
    }

    clearFields() {
        [this.inp_name, this.inp_img].forEach( input => {
            input.value = '';
        })
    }

    onSubmit() {
        if (this.inp_name.value && this.inp_img.value) {
            this.doSubmit();
        }
    }

    doSubmit() {
        this.callAttribute('on-new', {
            name: this.inp_name.value,
            img: this.inp_img.value
        });
        this.clearFields();
    }
});