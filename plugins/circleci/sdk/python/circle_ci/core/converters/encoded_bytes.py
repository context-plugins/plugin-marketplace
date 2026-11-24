"""Wire formats for binary values carried as text.

A :class:`ByteEncodingConverter` is a parse/dump pair for one of RFC 4648's five alphabets -- the
binary sibling of :mod:`.date_time`'s ``DateTimeConverter``. Two surfaces are built from them, one
per position a spec can put a binary value in. A **model property** names :func:`ByteField`, which
carries its encoding and charset beside its wire key exactly as pydantic's own ``Field`` carries an
alias. An **endpoint** names one of the twenty ``Annotated`` aliases in a subscript, because that is
how every other parameter, body and decoder declares its type. Both spellings resolve to the same
converter; only the declaration site differs.

**The direction split is the whole point.** A ``str`` can only be the wire spelling, so it is
decoded; ``bytes`` are the value itself and pass through to pydantic's own ``bytes`` validation.
This is deliberately not pydantic's ``EncodedBytes``, which is an *after* validator and therefore
decodes raw input bytes too -- and lax decoding discards non-alphabet characters, so a caller's file
content is silently corrupted rather than rejected.

**Strictness is hand-audited per alphabet, because the stdlib's convenience spellings are not
uniformly strict.** ``urlsafe_b64decode`` is lax: it reads ``"aGV*sbG8="`` as ``b"hello"``, dropping
the ``*``, so the base64url codec goes through ``b64decode`` with ``altchars`` and ``validate=True``
instead. The three base16/base32 decoders refuse a lowercase digit unless told to fold it, while
their encoders emit the uppercase alphabets the RFC defines, so decoding folds and encoding stays
canonical.

An encoding that cannot *reject* is not offered. ``quoted-printable`` is RFC 2045's other
``contentEncoding`` value and is absent for that reason: ``quopri.decodestring`` never raises
(``b"hello=ZZworld"`` passes through unchanged), so it could only ship lax. ``7bit``, ``8bit`` and
``binary`` mean *not encoded at all*, which is a raw body or a file part rather than a converter.

Every decode rejection raises ``ValueError`` with the alphabet's name in caps, never ``TypeError``:
pydantic wraps ``ValueError`` from a validator into ``ValidationError`` but lets anything else escape
as a programming error. All five stdlib decoders raise ``binascii.Error``, a ``ValueError`` subclass,
so one ``except`` arm covers the family. The message deliberately does not repeat the offending
value -- it may be gigabytes, and it may be a secret."""

from __future__ import annotations

import base64
import binascii
from collections.abc import Callable
from dataclasses import dataclass
from functools import partial
from typing import Annotated, Any, Final, Literal, TypeAlias

from pydantic import Field
from pydantic.functional_serializers import PlainSerializer
from pydantic.functional_validators import BeforeValidator

ByteEncodingName: TypeAlias = Literal["base64", "base64url", "base32", "base32hex", "base16"]
"""The alphabets an OpenAPI 3.1 ``contentEncoding`` can name and this module can reject strictly.

RFC 4648 defines exactly these five, and OpenAPI 3.1 says ``contentEncoding`` supports all encodings
defined in RFC 4648. ``hex`` is base16 under its other name, folded onto ``"base16"`` at emission
time along with the case-insensitive comparison the spec calls for."""

ByteCharset: TypeAlias = Literal["ascii", "utf-8", "latin-1", "cp1252"]
"""The charsets that can render RFC 4648 output back as text.

Restricted deliberately, and the restriction is the safety. Those alphabets are ASCII-only -- the
highest byte any of the five encoders emits is ``z`` -- so all four values produce byte-identical
text. ``utf-16`` would instead pair the characters into unrelated codepoints and ``utf-32`` cannot
decode the length at all, so admitting them would only add values that cannot round-trip. Refusing
them here makes a wrong charset a build failure rather than a wrong wire value.

``utf-8`` is the default: it is the charset JSON itself is defined in, and for these alphabets it
is byte-identical to the alternatives. ``ascii`` remains available and is strictly stricter,
raising on a non-ASCII byte where ``utf-8`` accepts a well-formed multi-byte sequence; that made
it the original default, as an assertion that the codec table produced what it promised.
Declaring it is now how a property asks for that check."""


@dataclass(frozen=True, slots=True)
class ByteEncodingConverter:
    """How one alphabet is read and written.

    ``decode`` takes the wire ``str`` -- every stdlib decoder accepts one and encodes it to ASCII
    itself -- and ``encode`` produces the alphabet's bytes, which :meth:`dump` renders back to text
    through the declared charset. Frozen so the instance stays hashable, which is what lets the
    aliases below reach the process-wide adapter cache."""

    name: str
    decode: Callable[[str], bytes]
    encode: Callable[[bytes], bytes]

    def parse(self, value: object) -> object:
        """Decode the wire spelling, or pass a value straight through.

        Args:
            value: Whatever arrived -- a ``str`` from the wire, or ``bytes`` the caller supplied.

        Returns:
            The decoded ``bytes`` for a ``str``, and ``value`` unchanged for anything else, which
            leaves pydantic's own ``bytes`` validation to judge it.

        Raises:
            ValueError: If ``value`` is a ``str`` that is not valid text in this alphabet. The
                message names the alphabet and deliberately omits the value."""
        if isinstance(value, str):
            try:
                return self.decode(value)
            except binascii.Error as e:
                raise ValueError(f"{self.name}: not valid RFC 4648 {self.name.lower()} text.") from e
        return value

    def dump(self, value: bytes | None, charset: ByteCharset) -> str | None:
        """Encode ``value`` into this alphabet and render it as text.

        The ``None`` arm is load-bearing for :func:`ByteField` alone: a field's metadata applies to
        its whole annotation, so an optional property hands ``None`` straight here. The aliases below
        sit inside the ``bytes`` arm of a ``bytes | None`` union and never see one.

        Args:
            value: The bytes to encode, or ``None`` from an optional property.
            charset: The charset to render the encoded bytes through. Every value
                :data:`ByteCharset` admits produces identical text for this ASCII-only output.

        Returns:
            The encoded text, or ``None`` for a ``None`` input."""
        return None if value is None else self.encode(value).decode(charset)


BASE64: Final = ByteEncodingConverter(
    name="BASE64",
    decode=lambda text: base64.b64decode(text, validate=True),
    encode=base64.b64encode,
)
BASE64URL: Final = ByteEncodingConverter(
    name="BASE64URL",
    decode=lambda text: base64.b64decode(text, altchars=b"-_", validate=True),
    encode=base64.urlsafe_b64encode,
)
BASE32: Final = ByteEncodingConverter(
    name="BASE32",
    decode=lambda text: base64.b32decode(text, casefold=True),
    encode=base64.b32encode,
)
BASE32HEX: Final = ByteEncodingConverter(
    name="BASE32HEX",
    decode=lambda text: base64.b32hexdecode(text, casefold=True),
    encode=base64.b32hexencode,
)
BASE16: Final = ByteEncodingConverter(
    name="BASE16",
    decode=lambda text: base64.b16decode(text, casefold=True),
    encode=base64.b16encode,
)

_CODECS: Final[dict[ByteEncodingName, ByteEncodingConverter]] = {
    "base64": BASE64,
    "base64url": BASE64URL,
    "base32": BASE32,
    "base32hex": BASE32HEX,
    "base16": BASE16,
}


def ByteField(
    *,
    encoding: ByteEncodingName = "base64",
    charset: ByteCharset = "utf-8",
    alias: str | None = None,
    description: str | None = None,
    default: Any = ...,
) -> Any:
    """A bytes property's wire encoding, declared beside its wire key.

    Wraps pydantic's ``Field`` and adds the two facts a binary property carries: which RFC 4648
    alphabet it crosses the wire in, and which charset renders that alphabet as text. Both are
    keyword-only and both are typed as ``Literal``, so a mistake is a build failure whose message
    names the accepted values rather than a wrong wire format nobody disagrees with -- and each is
    spelled at a property only where the spec differs from the default (``base64``, ``utf-8``), as
    every other spec-derived default in the emitted layer is (ADR-0048).

    Named in PascalCase on purpose. ``Field`` is itself a function spelled that way, and this reads
    as its sibling at the declaration site::

        file_name: str | None = Field(default=None, alias="fileName")
        content: bytes = ByteField()

    Args:
        encoding: The RFC 4648 alphabet the value is transmitted in.
        charset: The charset the encoded alphabet is rendered through.
        alias: The wire key, when it differs from the Python name.
        description: The property's description.
        default: The default value; omitted for a required property.

    Returns:
        A pydantic ``FieldInfo`` carrying the alphabet's validator and serializer, typed ``Any`` so
        it can stand as the default of a ``bytes``-annotated property -- exactly as ``Field`` is."""
    codec = _CODECS[encoding]
    info = Field(default=default, alias=alias, description=description)
    info.metadata.append(BeforeValidator(codec.parse))
    info.metadata.append(PlainSerializer(partial(codec.dump, charset=charset), return_type=str))
    return info


# The twenty aliases an endpoint names in a subscript, one per (alphabet, charset) pair. Each is
# spelled longhand because a type alias must be a valid type *expression*: a helper returning the
# ``Annotated`` is rejected as "expression is not a valid type", and would erase ``bytes`` with it.
# Each is bound once here, at import, which is what keeps one alias to one cached adapter --
# ``functools.partial`` hashes by identity, so an alias rebuilt per call site would mint a new one.

Base64AsciiEncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE64.parse), PlainSerializer(partial(BASE64.dump, charset="ascii"), return_type=str)
]
Base64Utf8EncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE64.parse), PlainSerializer(partial(BASE64.dump, charset="utf-8"), return_type=str)
]
Base64Latin1EncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE64.parse), PlainSerializer(partial(BASE64.dump, charset="latin-1"), return_type=str)
]
Base64Cp1252EncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE64.parse), PlainSerializer(partial(BASE64.dump, charset="cp1252"), return_type=str)
]

Base64UrlAsciiEncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE64URL.parse), PlainSerializer(partial(BASE64URL.dump, charset="ascii"), return_type=str)
]
Base64UrlUtf8EncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE64URL.parse), PlainSerializer(partial(BASE64URL.dump, charset="utf-8"), return_type=str)
]
Base64UrlLatin1EncodedBytes: TypeAlias = Annotated[
    bytes,
    BeforeValidator(BASE64URL.parse),
    PlainSerializer(partial(BASE64URL.dump, charset="latin-1"), return_type=str),
]
Base64UrlCp1252EncodedBytes: TypeAlias = Annotated[
    bytes,
    BeforeValidator(BASE64URL.parse),
    PlainSerializer(partial(BASE64URL.dump, charset="cp1252"), return_type=str),
]

Base32AsciiEncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE32.parse), PlainSerializer(partial(BASE32.dump, charset="ascii"), return_type=str)
]
Base32Utf8EncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE32.parse), PlainSerializer(partial(BASE32.dump, charset="utf-8"), return_type=str)
]
Base32Latin1EncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE32.parse), PlainSerializer(partial(BASE32.dump, charset="latin-1"), return_type=str)
]
Base32Cp1252EncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE32.parse), PlainSerializer(partial(BASE32.dump, charset="cp1252"), return_type=str)
]

Base32HexAsciiEncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE32HEX.parse), PlainSerializer(partial(BASE32HEX.dump, charset="ascii"), return_type=str)
]
Base32HexUtf8EncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE32HEX.parse), PlainSerializer(partial(BASE32HEX.dump, charset="utf-8"), return_type=str)
]
Base32HexLatin1EncodedBytes: TypeAlias = Annotated[
    bytes,
    BeforeValidator(BASE32HEX.parse),
    PlainSerializer(partial(BASE32HEX.dump, charset="latin-1"), return_type=str),
]
Base32HexCp1252EncodedBytes: TypeAlias = Annotated[
    bytes,
    BeforeValidator(BASE32HEX.parse),
    PlainSerializer(partial(BASE32HEX.dump, charset="cp1252"), return_type=str),
]

Base16AsciiEncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE16.parse), PlainSerializer(partial(BASE16.dump, charset="ascii"), return_type=str)
]
Base16Utf8EncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE16.parse), PlainSerializer(partial(BASE16.dump, charset="utf-8"), return_type=str)
]
Base16Latin1EncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE16.parse), PlainSerializer(partial(BASE16.dump, charset="latin-1"), return_type=str)
]
Base16Cp1252EncodedBytes: TypeAlias = Annotated[
    bytes, BeforeValidator(BASE16.parse), PlainSerializer(partial(BASE16.dump, charset="cp1252"), return_type=str)
]
