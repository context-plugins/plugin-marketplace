from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.html_sanitization import HtmlSanitizationOrStr


class ProcessingOptions(SdkBaseModel):
    """Options for job processing."""

    disable_street_address_resolution: Optional[bool] = Field(default=UNSET, alias="disableStreetAddressResolution")
    """If set to ``true``, the service does not attempt to resolve a more precise address for the job."""

    html_sanitization: Optional[HtmlSanitizationOrStr] = Field(default=UNSET, alias="htmlSanitization")
    """Option for job HTML content sanitization. Applied fields are: * description * applicationInfo.instruction *
    incentives * qualifications * responsibilities HTML tags in these fields may be stripped if sanitiazation isn't
    disabled. Defaults to HtmlSanitization.SIMPLE_FORMATTING_ONLY."""


class ProcessingOptionsDict(TypedDict):
    disable_street_address_resolution: NotRequired[bool]
    html_sanitization: NotRequired[HtmlSanitizationOrStr]
