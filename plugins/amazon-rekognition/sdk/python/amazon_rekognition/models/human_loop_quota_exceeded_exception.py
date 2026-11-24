from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HumanLoopQuotaExceededException(SdkBaseModel):
    resource_type: Optional[str] = Field(default=UNSET, alias="ResourceType")
    """The resource type."""

    quota_code: Optional[str] = Field(default=UNSET, alias="QuotaCode")
    """The quota code."""

    service_code: Optional[str] = Field(default=UNSET, alias="ServiceCode")
    """The service code."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    code: Optional[str] = Field(default=UNSET, alias="Code")
    logref: Optional[str] = Field(default=UNSET, alias="Logref")
    """A universally unique identifier (UUID) for the request."""


class HumanLoopQuotaExceededExceptionDict(TypedDict):
    resource_type: NotRequired[str]
    quota_code: NotRequired[str]
    service_code: NotRequired[str]
    message: NotRequired[str]
    code: NotRequired[str]
    logref: NotRequired[str]
