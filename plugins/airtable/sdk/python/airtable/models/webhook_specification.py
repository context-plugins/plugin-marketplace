from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .options import Options, OptionsDict


class WebhookSpecification(SdkBaseModel):
    """The specification defining what changes the webhook monitors."""

    options: Optional[Options] = UNSET


class WebhookSpecificationDict(TypedDict):
    options: NotRequired[OptionsDict]
