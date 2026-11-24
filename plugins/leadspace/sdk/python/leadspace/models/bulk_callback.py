from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .callback_method import CallbackMethod, CallbackMethodDict
from .enums.bulk_status import BulkStatusOrStr


class BulkCallback(SdkBaseModel):
    bulk_id: Optional[str] = Field(default=UNSET, alias="bulkId")
    callback_method: Optional[CallbackMethod] = Field(default=UNSET, alias="callbackMethod")
    bulk_status: Optional[BulkStatusOrStr] = Field(default=UNSET, alias="bulkStatus")
    success_records: Optional[int] = Field(default=UNSET, alias="successRecords")
    person_enriched: Optional[int] = Field(default=UNSET, alias="personEnriched")
    company_enriched: Optional[int] = Field(default=UNSET, alias="companyEnriched")


class BulkCallbackDict(TypedDict):
    bulk_id: NotRequired[str]
    callback_method: NotRequired[CallbackMethodDict]
    bulk_status: NotRequired[BulkStatusOrStr]
    success_records: NotRequired[int]
    person_enriched: NotRequired[int]
    company_enriched: NotRequired[int]
