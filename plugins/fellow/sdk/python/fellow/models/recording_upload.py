from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class RecordingUpload(SdkBaseModel):
    """The upload_api response: a recording's API-import identity and status, nothing else.

    Deliberately omits the full Recording payload (transcript, recaps, media URL, calendar metadata) — this surface only
    reports what an API-upload client needs to poll an import to completion. The recording's id is exposed as
    ``recording_id`` to match the submit endpoint (POST /recordings/upload), which returns the same key."""

    recording_id: Optional[str] = UNSET
    title: OptionalNullable[str] = UNSET
    created_at: OptionalNullable[RFC3339DateTime] = UNSET
    updated_at: OptionalNullable[RFC3339DateTime] = UNSET
    status: Optional[StatusOrStr] = UNSET
    failure_reason: OptionalNullable[str] = UNSET


class RecordingUploadDict(TypedDict):
    recording_id: NotRequired[str]
    title: NotRequired[str | None]
    created_at: NotRequired[RFC3339DateTime | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    status: NotRequired[StatusOrStr]
    failure_reason: NotRequired[str | None]
