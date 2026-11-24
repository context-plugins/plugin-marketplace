from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class Aioverview3(SdkBaseModel):
    """Include Google AI Overview in the response. ``true``, ``{}`` and ``{"markdown": false}`` return the AI Overview
    without ``markdown``. Send ``{"markdown": true}`` to also get ``result.aioverview.markdown``. Paid add-on: one flat
    +2 credits covers ``aioverview`` and ``paaAioverview``, alone or together (`pricing
    </guides/providers#google-search-multi-page-pricing>`__)."""

    model_config = ConfigDict(extra="forbid")

    markdown: bool = False
    """Include AI Overview formatted as markdown in ``result.aioverview.markdown``. Only ``true`` turns it on."""


class Aioverview3Dict(TypedDict):
    markdown: NotRequired[bool]
