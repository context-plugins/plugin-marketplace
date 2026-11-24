from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr


class GoogleCloudApigeeV1UpdateError(SdkBaseModel):
    """Details on why a resource update failed in the runtime."""

    resource: Optional[str] = UNSET
    """The sub resource specific to this error (e.g. a proxy deployed within the EnvironmentConfig). If empty the error
    refers to the top level resource."""

    message: Optional[str] = UNSET
    """User-friendly error message."""

    code: Optional[CodeOrStr] = UNSET
    """Status code."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """A string that uniquely identifies the type of error. This provides a more reliable means to deduplicate errors
    across revisions and instances."""


class GoogleCloudApigeeV1UpdateErrorDict(TypedDict):
    resource: NotRequired[str]
    message: NotRequired[str]
    code: NotRequired[CodeOrStr]
    type_: NotRequired[str]
