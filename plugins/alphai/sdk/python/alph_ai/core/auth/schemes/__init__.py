"""Every scheme this runtime ships, plus the two caching tiers a managed OAuth 2.0 grant applies through.

One module per scheme *type* -- together the whole of OpenAPI's ``securitySchemes`` surface:
``http``/``basic`` and ``http``/``bearer``, ``apiKey`` in a header, a query parameter or a cookie, and
three ``oauth2`` flows. ``openIdConnect`` and ``implicit`` need no module of their own -- both reach this
runtime as a plain bearer token. Adding a fourth grant is one more module here and nothing anywhere else.

``oauth2_schemes`` is the exception that earns its place: it names no grant, holding the two
grant-agnostic tiers every flow's credentials and source are handed to."""

from .api_key_auth import ApiKeyCookieScheme, ApiKeyHeaderScheme, ApiKeyQueryScheme
from .basic_auth import (
    BasicAuthCredentials,
    BasicAuthCredentialsDict,
    BasicAuthCredentialsOrDict,
    BasicAuthScheme,
)
from .bearer_auth import BearerAuthScheme
from .oauth2_authorization_code import (
    AsyncAuthorizationCodeCredentials,
    AsyncAuthorizationCodeCredentialsDict,
    AsyncAuthorizationCodeCredentialsOrDict,
    AsyncAuthorizationCodePrompt,
    AsyncAuthorizationCodeTokenSource,
    AuthorizationCodeCredentials,
    AuthorizationCodeCredentialsDict,
    AuthorizationCodeCredentialsOrDict,
    AuthorizationCodePrompt,
    AuthorizationCodeTokenSource,
    PkceMethod,
)
from .oauth2_client_credentials import (
    AsyncClientCredentialsTokenSource,
    ClientCredentials,
    ClientCredentialsDict,
    ClientCredentialsOrDict,
    ClientCredentialsTokenSource,
)
from .oauth2_password import (
    AsyncPasswordTokenSource,
    PasswordCredentials,
    PasswordCredentialsDict,
    PasswordCredentialsOrDict,
    PasswordTokenSource,
)
from .oauth2_schemes import (
    AsyncOAuth2RefreshableScheme,
    AsyncOAuth2Scheme,
    OAuth2RefreshableScheme,
    OAuth2Scheme,
)

__all__ = [
    # http / basic
    "BasicAuthCredentials",
    "BasicAuthCredentialsDict",
    "BasicAuthCredentialsOrDict",
    "BasicAuthScheme",
    # http / bearer
    "BearerAuthScheme",
    # apiKey
    "ApiKeyHeaderScheme",
    "ApiKeyQueryScheme",
    "ApiKeyCookieScheme",
    # oauth2 -- the two caching tiers, grant-agnostic
    "OAuth2Scheme",
    "AsyncOAuth2Scheme",
    "OAuth2RefreshableScheme",
    "AsyncOAuth2RefreshableScheme",
    # oauth2 / clientCredentials
    "ClientCredentials",
    "ClientCredentialsDict",
    "ClientCredentialsOrDict",
    "ClientCredentialsTokenSource",
    "AsyncClientCredentialsTokenSource",
    # oauth2 / password
    "PasswordCredentials",
    "PasswordCredentialsDict",
    "PasswordCredentialsOrDict",
    "PasswordTokenSource",
    "AsyncPasswordTokenSource",
    # oauth2 / authorizationCode
    "AuthorizationCodeCredentials",
    "AuthorizationCodeCredentialsDict",
    "AuthorizationCodeCredentialsOrDict",
    "AsyncAuthorizationCodeCredentials",
    "AsyncAuthorizationCodeCredentialsDict",
    "AsyncAuthorizationCodeCredentialsOrDict",
    "AuthorizationCodePrompt",
    "AsyncAuthorizationCodePrompt",
    "PkceMethod",
    "AuthorizationCodeTokenSource",
    "AsyncAuthorizationCodeTokenSource",
]
