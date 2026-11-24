from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class TemplatesSignRequestsRequest(SdkBaseModel):
    subject: Optional[str] = UNSET
    message: OptionalNullable[str] = UNSET
    metadata: OptionalNullable[Any] = UNSET
    expiry_hours: Optional[int] = UNSET
    auto_send: Optional[bool] = UNSET
    redirect_url: Optional[str] = UNSET
    document_id: Optional[UUID] = UNSET
    """Required only if the template has no document of its own"""


class TemplatesSignRequestsRequestDict(TypedDict):
    subject: NotRequired[str]
    message: NotRequired[str | None]
    metadata: NotRequired[Any | None]
    expiry_hours: NotRequired[int]
    auto_send: NotRequired[bool]
    redirect_url: NotRequired[str]
    document_id: NotRequired[UUID]
