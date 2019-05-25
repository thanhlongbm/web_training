<upload>
    <div class="grid">
      <div class="col-3"></div>
      <div class="col-6">
        <div class="form emotion_form">
          <label>How do you feel right now?</label><br><br>
          <div class="grid">
              <div class="col-1"></div>
              <div class="col-2 emotion">
                  <img src="./assets/emo-icon/heartbr.png"></br>
                  <p class="emo-text emo-text1">Heartbroken</p>
              </div>
              <div class="col-2 emotion">
                  <img src="./assets/emo-icon/shocked.png"></br>
                  <p class="emo-text emo-text2">Shocked</p>
              </div>
              <div class="col-2 emotion">
                  <img src="./assets/emo-icon/angry.png"></br>
                  <p class="emo-text emo-text3">Angry</p>
              </div>
              <div class="col-2 emotion">
                  <img src="./assets/emo-icon/happy.png"></br>
                  <p class="emo-text emo-text4">On the Bound</p>
              </div>
              <div class="col-2 emotion">
                  <img src="./assets/emo-icon/excited.png"></br>
                  <p class="emo-text emo-text5">Better Than Ever</p>
              </div>
              <div class="col-1"></div>
          </div>
          
          <div class="grid">
            <div class="col-1"></div>
            <div class="col-2 emotion">
                <label class="emo-check">
                    <input type="radio" name="emo-radio" id = "heartbr">
                </label>
            </div>
            <div class="col-2 emotion">
                <label class="emo-check">
                    <input type="radio" name="emo-radio" id = "shocked">
                </label>
            </div>
            <div class="col-2 emotion">
                <label class="emo-check">
                    <input type="radio" name="emo-radio" id = "angry">
                </label>
            </div>
            <div class="col-2 emotion">
                <label class="emo-check">
                    <input type="radio" name="emo-radio" id = "happy">
                </label>
            </div>
            <div class="col-2 emotion">
                <label class="emo-check">
                    <input type="radio" name="emo-radio" id = "excited">
                </label>
            </div>
            <div class="col-1"></div>
          </div>

        </div>
      </div>
      <div class="col-3"></div>
    </div>

    <div class="grid">
      <div class="col-3"></div>
      <div class="col-6">
        <div class="form">
          <form class="upload_form">
            <label>Title</label><label style="color: red;">*</label>
            <input type="text" name = "selling_goods_title" maxlength = "100" placeholder="Say somehint i giving up on you">
            <p style="color: red; margin-top: 0;">Max. 100 characters</p>

            <label>Photo (max 5)</label><label style="color: red;">*</label>
            <input type="file" name="productImage" multiple><br><br>

            <label>Price(vnd)</label><label style="color: red;">*</label>
            <input type="number" name = "selling_goods_price" placeholder="Number only">

            <label>Select category</label><label style="color: red;">*</label>
            <select id = "selling_category">
                <option value="accessories" >Accessories</option>
                <option value="boy">Boys Stuff</option>
                <option value="bridal">Bridal</option>
                <option value="girl">Girls Stuff</option>
                <option value="jewel">Jewelry</option>
                <option value="weird">Weird Stuff</option>
                <option value="random">Random Stuff</option>
            </select>

            <label>What are you selling?</label>
            <textarea type="message" id="what_selling" placeholder="Write something nice here"></textarea>

            <label>Why do you sell it?</label>
            <textarea type="message" id="why_selling" placeholder="Write something nice here"></textarea>
          </form>
          <div id = "upload-error"></div>
          <button id="sell_btn" class="form_btn">Sell It</button>
        </div>    
      </div>
      <div class="col-3"></div>
  </div>
</upload>