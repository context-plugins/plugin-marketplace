from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Aioverview1(SdkBaseModel):
    """Include Google AI Overview in the response. Paid add-on: one flat +2 credits covers ``aioverview`` and
    ``paaAioverview``, alone or together (`pricing </guides/providers#google-search-multi-page-pricing>`__)."""

    model_config = ConfigDict(extra="forbid")

    markdown: bool = False
    """Include AI Overview formatted as markdown"""


class Aioverview1Dict(TypedDict):
    markdown: NotRequired[bool]
