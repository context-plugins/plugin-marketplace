from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .provider import Provider, ProviderDict


class ListProvidersResponse(SdkBaseModel):
    """The response message for the ``ListProviders`` method."""

    providers: Optional[list[Provider]] = UNSET
    """The requested providers, up to the number specified in ``page_size``."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A page token that can be sent to ``ListProviders`` to request the next page. If this is empty, then there are no
    more pages."""

    unreachable: Optional[list[str]] = UNSET
    """Unreachable resources, if any."""


class ListProvidersResponseDict(TypedDict):
    providers: NotRequired[list[ProviderDict]]
    next_page_token: NotRequired[str]
    unreachable: NotRequired[list[str]]
