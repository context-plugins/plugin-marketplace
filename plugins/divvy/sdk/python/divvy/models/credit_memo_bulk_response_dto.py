from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .credit_memo_response_dto import CreditMemoResponseDto, CreditMemoResponseDtoDict


class CreditMemoBulkResponseDto(SdkBaseModel):
    """Response Dto for bulk credit memo."""

    credit_memos: Optional[list[CreditMemoResponseDto]] = Field(default=UNSET, alias="creditMemos")
    """List of credit memos"""


class CreditMemoBulkResponseDtoDict(TypedDict):
    credit_memos: NotRequired[list[CreditMemoResponseDtoDict]]
