from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleRpcPreconditionFailureViolation(SdkBaseModel):
    """A message type used to describe a single precondition failure."""

    description: Optional[str] = UNSET
    """A description of how the precondition failed. Developers can use this description to understand how to fix the
    failure. For example: "Terms of service not accepted"."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """The type of PreconditionFailure. We recommend using a service-specific enum type to define the supported
    precondition violation subjects. For example, "TOS" for "Terms of Service violation"."""

    subject: Optional[str] = UNSET
    """The subject, relative to the type, that failed. For example, "google.com/cloud" relative to the "TOS" type would
    indicate which terms of service is being referenced."""


class GoogleRpcPreconditionFailureViolationDict(TypedDict):
    description: NotRequired[str]
    type_: NotRequired[str]
    subject: NotRequired[str]
