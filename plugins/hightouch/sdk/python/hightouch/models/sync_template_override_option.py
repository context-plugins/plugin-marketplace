from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SyncTemplateOverrideOption(SdkBaseModel):
    """Whether syncs created from a sync template may set a configuration field."""

    model_config = ConfigDict(extra="forbid")

    overridable: bool
    """True when syncs created from the template may set the field through ``syncTemplateOverrides``."""


class SyncTemplateOverrideOptionDict(TypedDict):
    overridable: bool
