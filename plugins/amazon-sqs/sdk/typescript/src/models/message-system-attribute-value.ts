import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MessageSystemAttributeValue = {
  /**
   * Strings are Unicode with UTF-8 binary encoding. For a list of code values, see ASCII Printable
   * Characters.
   */
  stringValue?: string;
  /**
   * Binary type attributes can store any binary data, such as compressed data, encrypted data, or
   * images.
   */
  binaryValue?: string;
  /** Not implemented. Reserved for future use. */
  stringListValues?: string[];
  /** Not implemented. Reserved for future use. */
  binaryListValues?: string[];
  /**
   * Amazon SQS supports the following logical data types: String, Number, and Binary. For the
   * Number data type, you must use StringValue. You can also append custom labels. For more
   * information, see Amazon SQS Message Attributes in the Amazon SQS Developer Guide.
   */
  dataType: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const messageSystemAttributeValueSchema: Schema<MessageSystemAttributeValue> =
  s.object<MessageSystemAttributeValue>(
    {
      stringValue: s.optional(s.string()),
      binaryValue: s.optional(s.string()),
      stringListValues: s.optional(s.array(s.string())),
      binaryListValues: s.optional(s.array(s.string())),
      dataType: s.string(),
      _keysMap: {
        stringValue: "StringValue",
        binaryValue: "BinaryValue",
        stringListValues: "StringListValues",
        binaryListValues: "BinaryListValues",
        dataType: "DataType",
      },
    },
    { additionalProperties: s.json() },
  );
