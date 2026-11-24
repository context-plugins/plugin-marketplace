from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostalAddress2(SdkBaseModel):
    """Postal address of the location that includes human readable information, such as postal delivery and payments
    addresses. Given a postal address, a postal service can deliver items to a premises, P.O. Box, or other delivery
    location."""

    language_code: Optional[str] = Field(default=UNSET, alias="languageCode")
    """Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the
    input form or is expected to match one of the languages used in the address' country/region, or their transliterated
    equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and
    will never affect any validation or other non-formatting related operations. If this value is not known, it should
    be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en"."""

    address_lines: Optional[list[str]] = Field(default=UNSET, alias="addressLines")
    """Unstructured address lines describing the lower levels of an address. Because values in ``address_lines`` do not
    have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is
    important that the line order is clear. The order of address lines should be "envelope order" for the country or
    region of the address. In places where this can vary (for example, Japan), ``address_language`` is used to make it
    explicit (for example, "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). In this way, the
    most specific line of an address can be selected based on the language. The minimum permitted structural
    representation of an address consists of a ``region_code`` with all remaining information placed in the
    ``address_lines``. It would be possible to format such an address very approximately without geocoding, but no
    semantic reasoning could be made about any of the address components until it was at least partially resolved.
    Creating an address only containing a ``region_code`` and ``address_lines`` and then geocoding is the recommended
    way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be
    localities or administrative areas)."""

    sorting_code: Optional[str] = Field(default=UNSET, alias="sortingCode")
    """Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the
    value is either a string like "CEDEX", optionally followed by a number (for example, "CEDEX 7"), or just a number
    alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (Côte
    d'Ivoire)."""

    region_code: Optional[str] = Field(default=UNSET, alias="regionCode")
    """Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user
    to ensure the value is correct. See https://cldr.unicode.org/ and
    https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for
    Switzerland."""

    sublocality: Optional[str] = UNSET
    """Optional. Sublocality of the address. For example, this can be a neighborhood, borough, or district."""

    organization: Optional[str] = UNSET
    """Optional. The name of the organization at the address."""

    administrative_area: Optional[str] = Field(default=UNSET, alias="administrativeArea")
    """Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For
    example, this can be a state, a province, an oblast, or a prefecture. For Spain, this is the province and not the
    autonomous community (for example, "Barcelona" and not "Catalonia"). Many countries don't use an administrative area
    in postal addresses. For example, in Switzerland, this should be left unpopulated."""

    revision: Optional[int] = UNSET
    """The schema revision of the ``PostalAddress``. This must be set to 0, which is the latest revision. All new
    revisions **must** be backward compatible with old revisions."""

    postal_code: Optional[str] = Field(default=UNSET, alias="postalCode")
    """Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they
    are used, they may trigger additional validation with other parts of the address (for example, state or zip code
    validation in the United States)."""

    locality: Optional[str] = UNSET
    """Optional. Generally refers to the city or town portion of the address. Examples: US city, IT comune, UK post
    town. In regions of the world where localities are not well defined or do not fit into this structure well, leave
    ``locality`` empty and use ``address_lines``."""

    recipients: Optional[list[str]] = UNSET
    """Optional. The recipient at the address. This field may, under certain circumstances, contain multiline
    information. For example, it might contain "care of" information."""


class PostalAddress2Dict(TypedDict):
    language_code: NotRequired[str]
    address_lines: NotRequired[list[str]]
    sorting_code: NotRequired[str]
    region_code: NotRequired[str]
    sublocality: NotRequired[str]
    organization: NotRequired[str]
    administrative_area: NotRequired[str]
    revision: NotRequired[int]
    postal_code: NotRequired[str]
    locality: NotRequired[str]
    recipients: NotRequired[list[str]]
