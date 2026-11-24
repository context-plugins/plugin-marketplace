from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .classification_chart_of_accounts_response_dto import (
    ClassificationChartOfAccountsResponseDto,
    ClassificationChartOfAccountsResponseDtoDict,
)


class ClassificationChartOfAccountsBulkResponseDto(SdkBaseModel):
    """Response Dto for bulk classification chart of accounts."""

    chart_of_accounts: Optional[list[ClassificationChartOfAccountsResponseDto]] = Field(
        default=UNSET, alias="chartOfAccounts"
    )
    """List of chart of accounts"""


class ClassificationChartOfAccountsBulkResponseDtoDict(TypedDict):
    chart_of_accounts: NotRequired[list[ClassificationChartOfAccountsResponseDtoDict]]
