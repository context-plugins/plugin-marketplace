from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .card_batch_result import CardBatchResult, CardBatchResultDict
from .enums.status import StatusOrStr


class CardBatchJob(SdkBaseModel):
    job_id: Optional[UUID] = Field(default=UNSET, alias="jobId")
    status: Optional[StatusOrStr] = UNSET
    total_cards: Optional[int] = Field(default=UNSET, alias="totalCards")
    processed_cards: Optional[int] = Field(default=UNSET, alias="processedCards")
    remaining_cards: Optional[int] = Field(default=UNSET, alias="remainingCards")
    succeeded_cards: Optional[int] = Field(default=UNSET, alias="succeededCards")
    failed_cards: Optional[int] = Field(default=UNSET, alias="failedCards")
    error: OptionalNullable[str] = UNSET
    results: Optional[list[CardBatchResult]] = UNSET
    upgrade_url: Optional[str] = Field(default=UNSET, alias="upgradeUrl")
    """Present when processing stopped because the account quota was exhausted."""


class CardBatchJobDict(TypedDict):
    job_id: NotRequired[UUID]
    status: NotRequired[StatusOrStr]
    total_cards: NotRequired[int]
    processed_cards: NotRequired[int]
    remaining_cards: NotRequired[int]
    succeeded_cards: NotRequired[int]
    failed_cards: NotRequired[int]
    error: NotRequired[str | None]
    results: NotRequired[list[CardBatchResultDict]]
    upgrade_url: NotRequired[str]
