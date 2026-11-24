from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HistoryResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    vin: Optional[str] = UNSET
    junk_and_salvage_information: Optional[list[Any]] = Field(default=UNSET, alias="junkAndSalvageInformation")
    insurance_information: Optional[list[Any]] = Field(default=UNSET, alias="insuranceInformation")
    brands_record_count: Optional[float] = Field(default=UNSET, alias="brandsRecordCount")
    brands_information: Optional[list[Any]] = Field(default=UNSET, alias="brandsInformation")
    vin_changed: Optional[bool] = Field(default=UNSET, alias="vinChanged")
    current_title_information: Optional[list[Any]] = Field(default=UNSET, alias="currentTitleInformation")
    history_information: Optional[list[Any]] = Field(default=UNSET, alias="historyInformation")


class HistoryResponseDict(TypedDict):
    success: NotRequired[bool]
    vin: NotRequired[str]
    junk_and_salvage_information: NotRequired[list[Any]]
    insurance_information: NotRequired[list[Any]]
    brands_record_count: NotRequired[float]
    brands_information: NotRequired[list[Any]]
    vin_changed: NotRequired[bool]
    current_title_information: NotRequired[list[Any]]
    history_information: NotRequired[list[Any]]
