from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.callback_state import CallbackStateOrStr
from .enums.callback_type1 import CallbackType1OrStr


class SignatureCallbacksInResponse1(SdkBaseModel):
    signature_request_id: Optional[UUID] = UNSET
    """Signature request's unique ID on Skribble."""

    type_: Optional[CallbackType1OrStr] = Field(default=UNSET, alias="type")
    """The type of this callback.

    Possible values:
      - **SUCCESS** Is triggered when the document has been successfully signed by all parties involved.
      - **UPDATE** Is triggered on changes on the ``SignatureRequest`` object like when one person of all involved
            parties has signed.
      - **ERROR** Is triggered when a person declines the signature or when the ``SignatureRequest`` is withdrawn.
      - **START_SIGN** Is triggered when a person starts the signature process (only for Express QES).
      - **IDENT_PENDING** Is triggered when the identification of a person within a signature process requires manual
            review.
      - **IDENT_ERROR** Is triggered when the identification of a person within a signature process ended in an
            error."""

    state: Optional[CallbackStateOrStr] = UNSET
    """The state of the callback.

    Possible values:
      - **OPEN** The callback request will be executed in the next execution cycle.
      - **COMPLETED** The callback request was executed successfully. The API received an HTTP 2xx success code in
            response.
      - **RESIGNATED** The callback request has been attempted ``attempts`` times but was unsuccessful. The API did not
            receive a valid HTTP 2xx response."""

    url: Optional[str] = UNSET
    """The called URL of this callback."""

    attempts: Optional[int] = UNSET
    """The attempts this callback was carried out."""

    messages: Optional[list[str]] = UNSET
    """Error messages in case that the callback failed."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """The time at which the object was created."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """The time at which the object was last changed."""


class SignatureCallbacksInResponse1Dict(TypedDict):
    signature_request_id: NotRequired[UUID]
    type_: NotRequired[CallbackType1OrStr]
    state: NotRequired[CallbackStateOrStr]
    url: NotRequired[str]
    attempts: NotRequired[int]
    messages: NotRequired[list[str]]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
