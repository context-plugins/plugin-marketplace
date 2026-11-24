from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .user_get_account_data import UserGetAccountData, UserGetAccountDataDict


class UserGetAccount(SdkBaseModel):
    """Container object containing account data."""

    type_: str = Field(alias="type")
    """Always "list"."""

    count: int
    """Count of accounts."""

    data: list[UserGetAccountData]
    """Accounts data."""


class UserGetAccountDict(TypedDict):
    type_: str
    count: int
    data: list[UserGetAccountDataDict]
