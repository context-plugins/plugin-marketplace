from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AdditionalDataset(SdkBaseModel):
    name: str = Field(alias="Name")
    """The name of the additional dataset. Valid names: "holiday" and "weather"."""

    configuration: Optional[dict[str, Any]] = Field(default=UNSET, alias="Configuration")
    """Weather Index To enable the Weather Index, do not specify a value for Configuration. Holidays Holidays To enable
    Holidays, set CountryCode to one of the following two-letter country codes: "AL" - ALBANIA "AR" - ARGENTINA "AT" -
    AUSTRIA "AU" - AUSTRALIA "BA" - BOSNIA HERZEGOVINA "BE" - BELGIUM "BG" - BULGARIA "BO" - BOLIVIA "BR" - BRAZIL "BY"
    - BELARUS "CA" - CANADA "CL" - CHILE "CO" - COLOMBIA "CR" - COSTA RICA "HR" - CROATIA "CZ" - CZECH REPUBLIC "DK" -
    DENMARK "EC" - ECUADOR "EE" - ESTONIA "ET" - ETHIOPIA "FI" - FINLAND "FR" - FRANCE "DE" - GERMANY "GR" - GREECE "HU"
    - HUNGARY "IS" - ICELAND"""


class AdditionalDatasetDict(TypedDict):
    name: str
    configuration: NotRequired[dict[str, Any]]
