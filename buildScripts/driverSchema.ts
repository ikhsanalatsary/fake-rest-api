const driverSchema = {
  "type": "object",
  "properties": {
    "drivers": {
      "type": "array",
      "minItems": 800,
      "maxItems": 1500,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "faker": "random.uuid"
          },
          "name": {
            "type": "string",
            "faker": "name.findName"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          },
          "phone": {
            "type": "string",
            "faker": "phone.phoneNumber"
          },
          "suspended": {
            "type": "integer",
            "maximum": "1",
            "minimum": "0",
            "multipleOf": 1
          }
        },
        "required": [
          "id",
          "name",
          "email",
          "phone",
          "suspended"
        ]
      }
    }
  },
  "required": ["drivers"]
};

export default driverSchema;
