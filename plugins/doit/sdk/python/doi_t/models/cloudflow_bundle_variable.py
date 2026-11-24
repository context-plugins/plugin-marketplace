from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudflowBundleVariable(SdkBaseModel):
    key: str
    name: str
    description: Optional[str] = UNSET
    required: Optional[bool] = UNSET
    type_: str = Field(alias="type")
    element_type: Optional[str] = Field(default=UNSET, alias="elementType")
    value: Optional[str] = UNSET
    """Present unless the export stripped variable values. Connection-typed values are ``$req:connections/<key>``
    tokens."""


class CloudflowBundleVariableDict(TypedDict):
    key: str
    name: str
    description: NotRequired[str]
    required: NotRequired[bool]
    type_: str
    element_type: NotRequired[str]
    value: NotRequired[str]
