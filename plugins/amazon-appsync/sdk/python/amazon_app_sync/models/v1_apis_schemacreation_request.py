from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1ApisSchemacreationRequest(SdkBaseModel):
    definition: str
    """The schema definition, in GraphQL schema language format."""


class V1ApisSchemacreationRequestDict(TypedDict):
    definition: str
