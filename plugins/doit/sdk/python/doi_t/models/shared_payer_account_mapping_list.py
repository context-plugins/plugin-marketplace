from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .shared_payer_account_mapping import SharedPayerAccountMapping, SharedPayerAccountMappingDict


class SharedPayerAccountMappingList(SdkBaseModel):
    items: Optional[list[SharedPayerAccountMapping]] = UNSET


class SharedPayerAccountMappingListDict(TypedDict):
    items: NotRequired[list[SharedPayerAccountMappingDict]]
