from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .biller_payee_details import BillerPayeeDetails, BillerPayeeDetailsDict
from .digital_wallet_payee_details import DigitalWalletPayeeDetails, DigitalWalletPayeeDetailsDict
from .domestic_payee_details import DomesticPayeeDetails, DomesticPayeeDetailsDict
from .enums.payee_type import PayeeTypeOrStr
from .international_payee_details import InternationalPayeeDetails, InternationalPayeeDetailsDict
from .links_platform_payees_api import LinksPlatformPayeesApi, LinksPlatformPayeesApiDict


class PayeeDetailsResponse(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always 'payee'."""

    id: str
    """The unique identifier for the payee."""

    nickname: Optional[str] = UNSET
    """A user-defined nickname for the payee."""

    description: Optional[str] = UNSET
    """A description of the payee."""

    payee_type: PayeeTypeOrStr = Field(alias="payeeType")
    """The type of payee."""

    connection_id: Optional[str] = Field(default=UNSET, alias="connectionId")
    """The connection ID associated with this payee."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """The date and time when the payee was created."""

    domestic: Optional[DomesticPayeeDetails] = UNSET
    """Details specific to domestic payees."""

    biller: Optional[BillerPayeeDetails] = UNSET
    """Details specific to biller payees."""

    international: Optional[InternationalPayeeDetails] = UNSET
    """Details specific to international payees."""

    digital_wallet: Optional[DigitalWalletPayeeDetails] = Field(default=UNSET, alias="digitalWallet")
    """Details specific to digital wallet payees."""

    links: LinksPlatformPayeesApi


class PayeeDetailsResponseDict(TypedDict):
    type_: str
    id: str
    nickname: NotRequired[str]
    description: NotRequired[str]
    payee_type: PayeeTypeOrStr
    connection_id: NotRequired[str]
    created_date: NotRequired[RFC3339DateTime]
    domestic: NotRequired[DomesticPayeeDetailsDict]
    biller: NotRequired[BillerPayeeDetailsDict]
    international: NotRequired[InternationalPayeeDetailsDict]
    digital_wallet: NotRequired[DigitalWalletPayeeDetailsDict]
    links: LinksPlatformPayeesApiDict
