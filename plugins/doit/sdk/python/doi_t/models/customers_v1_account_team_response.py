from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .account_manager_list_item import AccountManagerListItem, AccountManagerListItemDict


class CustomersV1AccountTeamResponse(SdkBaseModel):
    account_managers: Optional[list[AccountManagerListItem]] = Field(default=UNSET, alias="accountManagers")


class CustomersV1AccountTeamResponseDict(TypedDict):
    account_managers: NotRequired[list[AccountManagerListItemDict]]
