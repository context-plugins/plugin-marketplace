from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum_identity_identities_api import DatumIdentityIdentitiesApi, DatumIdentityIdentitiesApiDict


class IdentitiesGetResponseResource(SdkBaseModel):
    """Object containing details for identities."""

    data: list[DatumIdentityIdentitiesApi]
    type_: str = Field(alias="type")
    """Type, always "list"."""

    count: int
    """Count of the identities in the response."""


class IdentitiesGetResponseResourceDict(TypedDict):
    data: list[DatumIdentityIdentitiesApiDict]
    type_: str
    count: int
