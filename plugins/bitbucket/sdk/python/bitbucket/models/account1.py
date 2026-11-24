from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account_links import AccountLinks, AccountLinksDict


class Account1(SdkBaseModel):
    """All Of object, account1."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    links: Optional[AccountLinks] = UNSET
    """Links related to an Account."""

    created_on: Optional[RFC3339DateTime] = UNSET
    display_name: Optional[str] = UNSET
    uuid: Optional[str] = UNSET


class Account1Dict(TypedDict):
    type_: NotRequired[str]
    links: NotRequired[AccountLinksDict]
    created_on: NotRequired[RFC3339DateTime]
    display_name: NotRequired[str]
    uuid: NotRequired[str]
