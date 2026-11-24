from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class QrcBulkUpdate(SdkBaseModel):
    qr_code_ids: Optional[list[str]] = UNSET


class QrcBulkUpdateDict(TypedDict):
    qr_code_ids: NotRequired[list[str]]
