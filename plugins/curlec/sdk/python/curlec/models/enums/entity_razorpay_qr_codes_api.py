from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayQrCodesApi(str, Enum):
    QR_CODE = "qr_code"

    __str__ = str.__str__


EntityRazorpayQrCodesApiOrStr: TypeAlias = Annotated[
    EntityRazorpayQrCodesApi | str, open_enum_validator(EntityRazorpayQrCodesApi)
]
