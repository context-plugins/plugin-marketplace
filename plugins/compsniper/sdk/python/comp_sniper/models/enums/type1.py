from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1(str, Enum):
    """Select custom unless the shipment will use the exact named carrier packaging."""

    CUSTOM = "custom"
    USPS_FLAT_RATE_ENVELOPE = "usps_flat_rate_envelope"
    USPS_PADDED_FLAT_RATE_ENVELOPE = "usps_padded_flat_rate_envelope"
    USPS_LEGAL_FLAT_RATE_ENVELOPE = "usps_legal_flat_rate_envelope"
    USPS_SMALL_FLAT_RATE_BOX = "usps_small_flat_rate_box"
    USPS_MEDIUM_FLAT_RATE_BOX = "usps_medium_flat_rate_box"
    USPS_LARGE_FLAT_RATE_BOX = "usps_large_flat_rate_box"
    USPS_EXPRESS_FLAT_RATE_ENVELOPE = "usps_express_flat_rate_envelope"
    FEDEX_ONE_RATE_ENVELOPE = "fedex_one_rate_envelope"
    FEDEX_ONE_RATE_PAK = "fedex_one_rate_pak"
    FEDEX_ONE_RATE_EXTRA_SMALL_BOX = "fedex_one_rate_extra_small_box"
    FEDEX_ONE_RATE_SMALL_BOX = "fedex_one_rate_small_box"
    FEDEX_ONE_RATE_MEDIUM_BOX = "fedex_one_rate_medium_box"
    FEDEX_ONE_RATE_LARGE_BOX = "fedex_one_rate_large_box"
    FEDEX_ONE_RATE_EXTRA_LARGE_BOX = "fedex_one_rate_extra_large_box"
    FEDEX_ONE_RATE_TUBE = "fedex_one_rate_tube"

    __str__ = str.__str__


Type1OrStr: TypeAlias = Annotated[Type1 | str, open_enum_validator(Type1)]
