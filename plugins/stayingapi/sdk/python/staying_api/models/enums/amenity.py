from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Amenity(str, Enum):
    POOL = "pool"
    HOT_TUB = "hot_tub"
    KITCHEN = "kitchen"
    WIFI = "wifi"
    AIR_CONDITIONING = "air_conditioning"
    HEATING = "heating"
    PARKING_FREE = "parking_free"
    PARKING_PAID = "parking_paid"
    PET_FRIENDLY = "pet_friendly"
    WASHER = "washer"
    DRYER = "dryer"
    EV_CHARGER = "ev_charger"
    GYM = "gym"
    SEA_VIEW = "sea_view"
    BEACHFRONT = "beachfront"
    BALCONY = "balcony"
    BBQ = "bbq"
    WORKSPACE = "workspace"
    CRIB = "crib"
    ELEVATOR = "elevator"
    WHEELCHAIR_ACCESSIBLE = "wheelchair_accessible"
    SMOKE_ALARM = "smoke_alarm"
    BREAKFAST = "breakfast"
    SPA = "spa"
    GARDEN = "garden"
    FIREPLACE = "fireplace"
    DISHWASHER = "dishwasher"
    SELF_CHECK_IN = "self_check_in"
    NON_SMOKING = "non_smoking"
    FAMILY_FRIENDLY = "family_friendly"

    __str__ = str.__str__


AmenityOrStr: TypeAlias = Annotated[Amenity | str, open_enum_validator(Amenity)]
