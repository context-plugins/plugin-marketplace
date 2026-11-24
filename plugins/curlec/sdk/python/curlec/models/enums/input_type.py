from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InputType(str, Enum):
    RAZORPAY_TOKEN = "razorpay_token"
    SERVICE_PROVIDER_TOKEN = "service_provider_token"
    RAW = "raw"

    __str__ = str.__str__


InputTypeOrStr: TypeAlias = Annotated[InputType | str, open_enum_validator(InputType)]
