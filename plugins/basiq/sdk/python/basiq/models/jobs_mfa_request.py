from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class JobsMfaRequest(SdkBaseModel):
    mfa_response: list[str] = Field(alias="mfa-response")
    """One time password or answer to a security question/s e.g. ["1234"]"""


class JobsMfaRequestDict(TypedDict):
    mfa_response: list[str]
