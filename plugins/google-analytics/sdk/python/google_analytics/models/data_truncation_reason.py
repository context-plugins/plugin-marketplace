from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_truncation_date_range import DataTruncationDateRange, DataTruncationDateRangeDict
from .enums.data_truncation_type import DataTruncationTypeOrStr


class DataTruncationReason(SdkBaseModel):
    """Describes a reason for data truncation in the report."""

    data_truncation_type: Optional[DataTruncationTypeOrStr] = Field(default=UNSET, alias="dataTruncationType")
    """The type of data truncation."""

    data_truncation_date: Optional[str] = Field(default=UNSET, alias="dataTruncationDate")
    """The data truncation date in the format YYYY-MM-DD. Indicates data before this date is truncated."""

    data_truncation_date_ranges: Optional[list[DataTruncationDateRange]] = Field(
        default=UNSET, alias="dataTruncationDateRanges"
    )
    """The truncated date ranges."""

    data_truncation_message: Optional[str] = Field(default=UNSET, alias="dataTruncationMessage")
    """A descriptive message explaining the data truncation."""


class DataTruncationReasonDict(TypedDict):
    data_truncation_type: NotRequired[DataTruncationTypeOrStr]
    data_truncation_date: NotRequired[str]
    data_truncation_date_ranges: NotRequired[list[DataTruncationDateRangeDict]]
    data_truncation_message: NotRequired[str]
