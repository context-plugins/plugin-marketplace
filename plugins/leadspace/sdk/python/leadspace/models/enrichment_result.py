from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enriched_record import EnrichedRecord, EnrichedRecordDict
from .enums.status import StatusOrStr


class EnrichmentResult(SdkBaseModel):
    status: Optional[StatusOrStr] = UNSET
    external_id: Optional[str] = UNSET
    data: Optional[EnrichedRecord] = UNSET


class EnrichmentResultDict(TypedDict):
    status: NotRequired[StatusOrStr]
    external_id: NotRequired[str]
    data: NotRequired[EnrichedRecordDict]
