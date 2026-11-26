from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ReplyTo(SdkBaseModel):
    user_id: str = Field(alias="userId")
    """BILL-generated ID of the user sending the invoice. The value begins with ``006``.

    You can retrieve your user ID when you sign in with ``/v3/login``."""


class ReplyToDict(TypedDict):
    user_id: str
