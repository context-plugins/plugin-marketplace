from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SupplementaryFeature(SdkBaseModel):
    name: str = Field(alias="Name")
    """The name of the feature. Valid values: "holiday" and "weather"."""

    value: str = Field(alias="Value")
    """Weather Index To enable the Weather Index, set the value to "true" Holidays To enable Holidays, specify a country
    with one of the following two-letter country codes: "AL" - ALBANIA "AR" - ARGENTINA "AT" - AUSTRIA "AU" - AUSTRALIA
    "BA" - BOSNIA HERZEGOVINA "BE" - BELGIUM "BG" - BULGARIA "BO" - BOLIVIA "BR" - BRAZIL "BY" - BELARUS "CA" - CANADA
    "CL" - CHILE "CO" - COLOMBIA "CR" - COSTA RICA "HR" - CROATIA "CZ" - CZECH REPUBLIC "DK" - DENMARK "EC" - ECUADOR
    "EE" - ESTONIA "ET" - ETHIOPIA "FI" - FINLAND "FR" - FRANCE "DE" - GERMANY "GR" - GREECE "HU" - HUNGARY "IS" -
    ICELAND "IN" - INDIA "IE" - IR"""


class SupplementaryFeatureDict(TypedDict):
    name: str
    value: str
