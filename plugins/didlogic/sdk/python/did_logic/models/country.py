from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Country(SdkBaseModel):
    name: str
    """Country name, as documents_create takes it in ``document[country]``"""


class CountryDict(TypedDict):
    name: str
