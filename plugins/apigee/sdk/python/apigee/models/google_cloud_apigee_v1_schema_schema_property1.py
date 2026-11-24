from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SchemaSchemaProperty1(SdkBaseModel):
    """Properties for the schema field. For example: { "createTime": "2016-02-26T10:23:09.592Z", "custom": "false",
    "type": "string" }"""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Time the field was created in RFC3339 string form. For example: ``2016-02-26T10:23:09.592Z``."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Data type of the field."""

    custom: Optional[str] = UNSET
    """Flag that specifies whether the field is standard in the dataset or a custom field created by the customer.
    ``true`` indicates that it is a custom field."""


class GoogleCloudApigeeV1SchemaSchemaProperty1Dict(TypedDict):
    create_time: NotRequired[str]
    type_: NotRequired[str]
    custom: NotRequired[str]
