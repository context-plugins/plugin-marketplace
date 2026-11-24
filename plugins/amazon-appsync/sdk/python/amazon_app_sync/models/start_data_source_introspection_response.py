from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.introspection_status1 import IntrospectionStatus1OrStr


class StartDataSourceIntrospectionResponse(SdkBaseModel):
    introspection_id: Optional[str] = Field(default=UNSET, alias="introspectionId")
    """The introspection ID. Each introspection contains a unique ID that can be used to reference the instrospection
    record."""

    introspection_status: Optional[IntrospectionStatus1OrStr] = Field(default=UNSET, alias="introspectionStatus")
    """The status of the introspection during creation. By default, when a new instrospection has been created, the
    status will be set to PROCESSING. Once the operation has been completed, the status will change to SUCCESS or FAILED
    depending on how the data was parsed. A FAILED operation will return an error and its details as an
    introspectionStatusDetail."""

    introspection_status_detail: Optional[str] = Field(default=UNSET, alias="introspectionStatusDetail")
    """The error detail field. When a FAILED introspectionStatus is returned, the introspectionStatusDetail will also
    return the exact error that was generated during the operation."""


class StartDataSourceIntrospectionResponseDict(TypedDict):
    introspection_id: NotRequired[str]
    introspection_status: NotRequired[IntrospectionStatus1OrStr]
    introspection_status_detail: NotRequired[str]
