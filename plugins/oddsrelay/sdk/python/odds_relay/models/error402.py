from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error7 import Error7, Error7Dict


class Error402(SdkBaseModel):
    error: Error7
    """``insufficient_tokens``: the request's price is above the account's balance. Nothing was served or spent. The
    message names the price, the balance and the reset, and two fixes: add filters, or (plan ``business``) talk to us
    about Enterprise at https://oddsrelay.io/contact, or (a custom plan) talk to us about raising your allowance at
    https://oddsrelay.io/contact, or (every other plan) upgrade. No ``Retry-After``."""


class Error402Dict(TypedDict):
    error: Error7Dict
