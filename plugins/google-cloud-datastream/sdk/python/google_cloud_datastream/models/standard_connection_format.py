from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StandardConnectionFormat(SdkBaseModel):
    """Standard connection format."""

    direct_connection: Optional[bool] = Field(default=UNSET, alias="directConnection")
    """Optional. Deprecated: Use the ``additional_options`` map to specify the ``directConnection`` parameter instead.
    For example: ``additional_options = {"directConnection": "true"}``. Specifies whether the client connects directly
    to the host[:port] in the connection URI."""


class StandardConnectionFormatDict(TypedDict):
    direct_connection: NotRequired[bool]
