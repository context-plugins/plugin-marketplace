from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.end_customer_mapping_result_status import EndCustomerMappingResultStatusOrStr


class EndCustomerMappingResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    ec_account_id: str = Field(alias="ecAccountId")
    ec_customer_id: str = Field(alias="ecCustomerId")
    cur_base_path: Optional[str] = Field(default=UNSET, alias="curBasePath")
    status: EndCustomerMappingResultStatusOrStr


class EndCustomerMappingResultDict(TypedDict):
    ec_account_id: str
    ec_customer_id: str
    cur_base_path: NotRequired[str]
    status: EndCustomerMappingResultStatusOrStr
