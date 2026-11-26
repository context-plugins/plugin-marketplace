from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProcessingOptions(SdkBaseModel):
    send_email: Optional[bool] = Field(default=UNSET, alias="sendEmail")
    """Set as ``true`` to send an email to the customer"""


class ProcessingOptionsDict(TypedDict):
    send_email: NotRequired[bool]
