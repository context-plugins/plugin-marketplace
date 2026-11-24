from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MessageSystemAttributeValue(SdkBaseModel):
    string_value: Optional[str] = Field(default=UNSET, alias="StringValue")
    """Strings are Unicode with UTF-8 binary encoding. For a list of code values, see ASCII Printable Characters."""

    binary_value: Optional[str] = Field(default=UNSET, alias="BinaryValue")
    """Binary type attributes can store any binary data, such as compressed data, encrypted data, or images."""

    string_list_values: Optional[list[str]] = Field(default=UNSET, alias="StringListValues")
    """Not implemented. Reserved for future use."""

    binary_list_values: Optional[list[str]] = Field(default=UNSET, alias="BinaryListValues")
    """Not implemented. Reserved for future use."""

    data_type: str = Field(alias="DataType")
    """Amazon SQS supports the following logical data types: String, Number, and Binary. For the Number data type, you
    must use StringValue. You can also append custom labels. For more information, see Amazon SQS Message Attributes in
    the Amazon SQS Developer Guide."""


class MessageSystemAttributeValueDict(TypedDict):
    string_value: NotRequired[str]
    binary_value: NotRequired[str]
    string_list_values: NotRequired[list[str]]
    binary_list_values: NotRequired[list[str]]
    data_type: str
