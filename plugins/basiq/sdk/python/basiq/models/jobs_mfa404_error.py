from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .datum3_identity_identities_api import Datum3IdentityIdentitiesApi, Datum3IdentityIdentitiesApiDict


class JobsMfa404Error(SdkBaseModel):
    type_: str = Field(alias="type")
    """Always "list"."""

    correlation_id: str = Field(alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: list[Datum3IdentityIdentitiesApi]
    """Error data."""


class JobsMfa404ErrorDict(TypedDict):
    type_: str
    correlation_id: str
    data: list[Datum3IdentityIdentitiesApiDict]
