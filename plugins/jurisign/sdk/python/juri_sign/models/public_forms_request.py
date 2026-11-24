from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class PublicFormsRequest(SdkBaseModel):
    name: str
    sign_request_template_id: UUID
    """Template with exactly 1 signer and its own document"""

    expires_at: OptionalNullable[RFC3339DateTime] = UNSET
    daily_submission_limit: OptionalNullable[int] = UNSET
    """Anti-abuse cap; clamped to the platform maximum"""


class PublicFormsRequestDict(TypedDict):
    name: str
    sign_request_template_id: UUID
    expires_at: NotRequired[RFC3339DateTime | None]
    daily_submission_limit: NotRequired[int | None]
