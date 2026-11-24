from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .class_connections_api import ClassConnectionsApi, ClassConnectionsApiDict
from .enums.status1 import Status1OrStr
from .links_connections_api import LinksConnectionsApi, LinksConnectionsApiDict


class Datum10(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type always "account"."""

    id: str
    """Account identification."""

    name: str
    """Account name."""

    currency: str
    """Currency"""

    class_: ClassConnectionsApi = Field(alias="class")
    account_no: str = Field(alias="accountNo")
    """Account number"""

    available_funds: str | None = Field(alias="availableFunds")
    """Account available funds, nullable."""

    balance: str | None
    """Account balance, nullable."""

    last_updated: str = Field(alias="lastUpdated")
    """Account last updated date and time."""

    status: Status1OrStr
    """Account status."""

    links: LinksConnectionsApi


class Datum10Dict(TypedDict):
    type_: str
    id: str
    name: str
    currency: str
    class_: ClassConnectionsApiDict
    account_no: str
    available_funds: str | None
    balance: str | None
    last_updated: str
    status: Status1OrStr
    links: LinksConnectionsApiDict
