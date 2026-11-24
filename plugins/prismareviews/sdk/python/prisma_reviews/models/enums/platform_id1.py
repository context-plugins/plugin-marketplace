from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlatformId1(str, Enum):
    """Platform to connect. An unknown value returns ``422 invalid_request``."""

    GOOGLE = "google"
    APP_STORE = "app_store"
    GOOGLE_PLAY = "google_play"
    JUDGE_ME = "judge_me"
    TRUSTPILOT = "trustpilot"
    GOOGLE_MAPS = "google_maps"
    YELP = "yelp"
    TRIPADVISOR = "tripadvisor"
    BOOKING = "booking"
    YOTPO = "yotpo"
    REVIEWS_IO = "reviews_io"
    G2 = "g2"
    EBAY = "ebay"
    ETSY = "etsy"
    STEAM = "steam"
    OKENDO = "okendo"
    FEEFO = "feefo"
    TRUSTED_SHOPS = "trusted_shops"
    EKOMI = "ekomi"
    LOOX = "loox"
    PROVEN_EXPERT = "proven_expert"
    SHOPPER_APPROVED = "shopper_approved"
    WORDPRESS = "wordpress"
    APPEXCHANGE = "appexchange"
    FACEBOOK = "facebook"
    OPENTABLE = "opentable"
    DOORDASH = "doordash"
    ANGI = "angi"
    CHECKATRADE = "checkatrade"
    AVVO = "avvo"
    CAPTERRA = "capterra"
    APARTMENTS = "apartments"
    GARTNER = "gartner"
    HEALTHGRADES = "healthgrades"
    VITALS = "vitals"
    CLASSPASS = "classpass"

    __str__ = str.__str__


PlatformId1OrStr: TypeAlias = Annotated[PlatformId1 | str, open_enum_validator(PlatformId1)]
