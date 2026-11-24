from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason(str, Enum):
    """Reason for rejection, present when ``status`` is ``"rejected"``.
    - ``invalid_handle`` — the delivery address is not a valid email or phone number
    - ``missing_variables`` — one or more required template variables are absent
      (``handle`` recipients only; ``id`` recipients are checked at send time)
    - ``invalid_id`` — the profile ID is empty or missing
    - ``missing_handle_or_id`` — the recipient has neither ``handle`` nor ``id``
    - ``invalid_locale`` — the ``locale`` is empty or longer than 7 characters
    - ``whatsapp_marketing_us_number`` — the message uses a marketing WhatsApp template, which Meta does not deliver to
        US phone numbers"""

    INVALID_HANDLE = "invalid_handle"
    MISSING_VARIABLES = "missing_variables"
    INVALID_ID = "invalid_id"
    MISSING_HANDLE_OR_ID = "missing_handle_or_id"
    INVALID_LOCALE = "invalid_locale"
    WHATSAPP_MARKETING_US_NUMBER = "whatsapp_marketing_us_number"

    __str__ = str.__str__


ReasonOrStr: TypeAlias = Annotated[Reason | str, open_enum_validator(Reason)]
