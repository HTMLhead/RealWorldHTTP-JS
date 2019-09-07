### get을 이용한 정보획득

메서드 : GET
goAPI : http.Get
node : http.request(option);

### 쿼리가 있는 정보 획득

메서드 : GET
goAPI : http.get
node : http.request(option:GET);

### head를 이용한 헤더 획득

메서드 : HEAD
goAPI : http.Head
node : http.request.headers

### x-www-form-urlencoded로 폼 전송

메서드 : POST
goAPI : http.PostForm
node : request.post('http:/url/rest/login').form({})

### POST로 파일 전송

메서드 : POST
goAPI : http.Post
node : http.request(option:POST)

### multipart/form-data로 파일 전송

메서드 : POST
goAPI : http.postFrom
node : formidable, multer

### 쿠키 송수신

메서드 : GET/HEAD/POST
goAPI : http.Client
node : cookie-parser

### 프록시

메서드 : GET/HEAD/POST
goAPI : http.Client
node : http.request(option:{
hostname: 'www.google.com',
port: 80,
path: client_req.url,
method: client_req.method,
headers: client_req.headers
})

### 파일 시스템 접근

메서드 : GET/HEAD/POST
goAPI : http.Client
node : http.request(option)
